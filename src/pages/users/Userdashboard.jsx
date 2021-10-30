import React,{useState,useEffect} from 'react'
// import {user_data} from '../../data'
import {useHistory} from 'react-router-dom'
import {ImCross} from 'react-icons/im'
import {BsInfoCircle} from 'react-icons/bs'
import {BiRightArrow} from 'react-icons/bi'
import '../assets/styles/userdashboard.css'
import axios from 'axios'
import { api } from '../../Api/api'
import { toast } from 'react-toastify'

function Userdashboard({match}) {
    const [user_data, setuser_data] = useState({
        "username": localStorage.getItem("username") || '',
        "user_id" : localStorage.getItem("user_id") || '',
        "All_Requests": []
    })
    const [search, setsearch] = useState('')
    const [filteredRequests, setfilteredRequests] = useState([])
    const [showRequestForm, setshowRequestForm] = useState(false)
    const [showDetails, setshowDetails] = useState(false)
    const [prodDetails, setprodDetails] = useState({})
    const [blur, setblur] = useState(false)
    const [loading, setloading] = useState(false)
    const [productName, setproductName] = useState('')
    const [productLink, setproductLink] = useState('')
    const [bank, setbank] = useState("ICIC")
    const history = useHistory()

    const handleChat = (e) => {
        const chatId = e.target.getAttribute("datakey")
        history.push(`/${match.params.userId}/dashboard/${chatId}`)
    }

    const filterFucntion = ({product_name}) => {
        return product_name.toLowerCase().indexOf(search.toLowerCase().trim()) > -1
    }

    useEffect(async() => {
        setloading(true)
        const headers = {"x-access-token": localStorage.getItem("token") || null}
        await axios.get(`${api}product/user`,headers)
        .then((res) => {
            console.log(res)
            if(res.status == 200){
                let temp_data = user_data
                temp_data.All_Requests = res.data.products
                setuser_data(temp_data)
            }
            setloading(false)
        })
    },[])

    useEffect(() => {
        if(search === ''){
            setfilteredRequests(user_data.All_Requests);
        }
        setfilteredRequests(user_data.All_Requests.filter(filterFucntion))
    }, [search])


    const postProduct = async(req,res) => {
        setloading(true)
        const headers = {"x-access-token": localStorage.getItem("token") || null}
        const body = {product_name: productName,product_link: productLink,bank: bank}
        await axios.post(`${api}product/add`,body,headers)
        .then((res) => {
            if(res.status == 200){
                toast("Successfully added")
            }
            else{
                toast("Some error occured")
            }
        })
        setloading(false)
    }


    if(loading){
        return (
            <div>
                loading
            </div>
        )
    }

    return (
        <>
        <div className={`dashboard-main ${blur ? "mkblr":''}`} >
            <h1 className="user-name"> Welcome {user_data.username},</h1>
        <div className="filter">
            <input type="text" placeholder="search by product name" onChange={(e) => setsearch(e.target.value)} value={search} />
            <button onClick={() => {setshowRequestForm(!showRequestForm);setblur(!blur)}}>Request a Product</button>
        </div>
        <div className="userData">
            <div className="requests">
                { (filteredRequests.length === 0) && <h2 style={{color:"rgb(180 180 180)",textAlign:"center"}}>No requests found!!!</h2> }
                {
                    filteredRequests.map(request =>  (
                        <div className="request" key={request.id}>
                            <div className="req-detail">
                                <h2>{request.product_name}</h2>
                                <p className="status">status : <span className={request.status?"success":"fail"}>{request.status?"Accepted":"Pending..."}</span></p>
                            </div>
                            {
                                request.status && 
                                <button className="chat" onClick={handleChat} datakey={request.chat_id}>Chat{'   '} <BiRightArrow /></button>
                            }
                            <button className="icon" onClick={() => {setshowDetails(!showDetails);setprodDetails(request);setblur(!blur)}}><BsInfoCircle /></button>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
        {
            showRequestForm && 
            <div className="requestForm">
                <form>
                    <div className="form-head">
                        <h1>REQUEST FORM</h1>
                        <button onClick={() => {setshowRequestForm(!showRequestForm);setblur(!blur)}}><ImCross /></button>
                    </div>
                    <div className="field">
                        <label htmlFor="Name">Product name</label>
                        <input type="text" name="Name" placeholder="product name" 
                        onChange = {(e) => {setproductName(e.target.value)}}
                        required/>
                    </div>
                    <div className="field">
                        <label htmlFor="link">Product link</label>
                        <input type="text" name="link" placeholder="product link"
                        onChange = {(e) => {setproductLink(e.target.value)}}
                        required/>
                    </div>
                    <div className="field">
                        <label htmlFor="bank">Bank</label>
                        <select name="bank">
                            <option value="ICICI">ICICI</option>
                            <option value="SBI">SBI</option>
                            <option value="AXIS">AXIS</option>
                        </select>
                    </div>
                    <button type="submit" onClick ={postProduct } >submit</button>
                </form>
            </div>
        }
        {
            showDetails && 
            <div className="prod-details">
                <h1>DETAILS</h1>
                <div className="sub-det">
                    <h3>Product name : {prodDetails.product_name}</h3>
                    <h3>Product link : <a href={prodDetails.product_link} target='_blank'>product link</a></h3>
                    <h3>Status : <span className={prodDetails.status?"success":"fail"}>{prodDetails.status?"Accepted":"Pending..."}</span></h3>
                </div>
                <button onClick={()=> {setshowDetails(!showDetails);setblur(!blur)}}><h2>Close</h2></button>
                
            </div>
        }
        
        </>
    )
}

export default Userdashboard
