import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PurchaseOrder() {

    const [refNo, setRefNo] = useState("");
    const [site, setSite] = useState("");
    const [items, setItems] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);
    const [supplier, setSupplier] = useState("");
    const [buyer, setBuyer] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [requiredDate, setRequiredDate] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [comment, setComment] = useState("");



    function sendData(e) {
        e.preventDefault();

        const newOrder = {
            refNo,
            site,
            items,
            totalAmount,
            supplier,
            buyer,
            email,
            address,
            requiredDate,
            contactNo,
            comment

        }

        axios.post("/api/order/add", newOrder).then(() => {
            alert("The Order request is added to the system successfully!")
        }).catch((err) => {
            alert(err)
        })
    }

    return (
        <div>
            <div className="addOrder">
                <form className="Form1" onSubmit={(e) => { if (window.confirm('Select "OK" If You Want To Confirm The Order'))sendData(e)}} style={{ background: "#151e3d" }}>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="refNo" className="col-sm-2 col-form-label" id="olabel1"><b>Reference Number</b></label>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="refNo" placeholder="REF0000" required
                                onChange={(e) => {
                                    setRefNo(e.target.value);
                                }} />
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="site" className="col-sm-2 col-form-label" id="olabel2" ><b>Site</b></label>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="site" placeholder="Type Site Name" required
                                onChange={(e) => {
                                    setSite(e.target.value);
                                }} />
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="items" className="col-sm-2 col-form-label" id="olabel3" ><b>Items</b></label>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="items" placeholder="Type Item Names" required
                                onChange={(e) => {
                                    setItems(e.target.value);
                                }} />
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="totalAmount" className="col-sm-2 col-form-label" id="olabel4" ><b>Total Amount</b></label>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control" id="totalAmount" placeholder="1000" required
                                onChange={(e) => {
                                    setTotalAmount(e.target.value);
                                }} />
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="supplier" className="col-sm-2 col-form-label" id="olabel5" ><b>Supplier</b></label>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="supplier" placeholder="Type Supplier Name" required
                                onChange={(e) => {
                                    setSupplier(e.target.value);
                                }} />
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="buyer" className="col-sm-2 col-form-label" id="olabel6" ><b>Buyer Name</b></label>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="buyer" placeholder="Type Buyer Name" required
                                onChange={(e) => {
                                    setBuyer(e.target.value);
                                }} />
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="email" className="col-sm-2 col-form-label" id="olabel1" ><b>Email</b></label>
                        </div>
                        <div className="col">
                            <input type="email" className="form-control" id="email" placeholder="fineline@gmail.com" required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="address" className="col-sm-2 col-form-label" id="olabel1" ><b>Address</b></label>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="address" placeholder="Type Shipping Address" required
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }} />
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="requiredDate" className="col-sm-2 col-form-label" id="olabel1" ><b>Required Date</b></label>
                        </div>
                        <div className="col">
                            <input type="date" className="form-control" id="requiredDate" placeholder="21-11-2022" required
                                onChange={(e) => {
                                    setRequiredDate(e.target.value);
                                }} />
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="contactNo" className="col-sm-2 col-form-label" id="olabel1" ><b>Contact Number</b></label>
                        </div>
                        <div className="col">
                            <input type="tel" className="form-control" id="contactNo" placeholder="0769979236" required
                                onChange={(e) => {
                                    setContactNo(e.target.value);
                                }} />
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="comment" className="col-sm-2 col-form-label" id="olabel1" ><b>Comments or Special Instructions</b></label>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="comment" placeholder="REF0000" required
                                onChange={(e) => {
                                    setComment(e.target.value);
                                }} />
                        </div>
                    </div>

                    <button type="submit" id="btnorder" className="btn btn-primary"><b>CONFIRM</b></button>


                </form>
            </div>
        </div>
    )
}