import React, { useState } from 'react';
import './address.css';


export default function Address() {
    const [shownewadd, setshownewadd] = useState(false);
    const [showadd, setshowadd] = useState(true);
    const newadd = () => {
        setshownewadd(true);
        setshowadd(false);
    }
    const addaddress = (e) => {
        e.preventDefault();
        setshowadd(true);
        setshownewadd(false);
    }
    const add = [
        {
            name: 'ombhai jayantibhai beladiya',
            mobile: '7990845663',
            pincode: '3642560',
            apartment: '803F,vrudavan dham ,nand chowk',
            city: 'Surat',
            area: 'mota varachha',
            state: 'GUJARAT',
            country: 'india'
        },
        {
            name: 'gautambhai jayantibhai beladiya',
            mobile: '9157928966',
            pincode: '3642560',
            apartment: '803F,vrudavan dham ,nand chowk',
            city: 'Surat',
            area: 'mota varachha',
            state: 'GUJARAT',
            country: 'india'
        },

    ]
    return (
        <>
            {showadd && <div className="list-add ">
                <div>
                    <h4 className='fs-6'>Select Delivary Address</h4>
                    <div className=" d-flex flex-column">
                        {add.map(add =>
                            <div className='select-add-group d-flex'>
                                <div className='d-flex'>
                                    <input type="radio" name="address" id="" className='add-radio-inp' />
                                    <div><b>{add.name}</b>, {add.apartment}, {add.area}, {add.city}, {add.state}, {add.pincode}, {add.country}, Mobile:{add.mobile}
                                    </div>
                                </div>
                                <div className='add-btn-edit-delete'><button>Delete</button></div>
                            </div>)}
                        <div className="new-add-link" onClick={newadd}>+ Add New</div>
                    </div>
                    <button className="proceed-to-pay-btn-add mt-4 mb-1 ">Proceed to Pay</button>
                </div>
            </div>}
            {shownewadd && <div className='add-main-div d-flex'>
                <div>
                    <form action="">
                        <h3 className='text-center fs-5'>Add a new address</h3>
                        <div className="add-input-group d-flex flex-column">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="" className="add-input" />
                        </div>
                        <div className="add-input-group d-flex flex-column">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="number" name="mobile" id="" className="add-input" />
                        </div>
                        <div className="add-input-group d-flex flex-column">
                            <label htmlFor="homeno">Flat No/House No/Appartment</label>
                            <input type="text" name="homeno" id="" className="add-input" />
                        </div>
                        <div className="add-input-group d-flex flex-column">
                            <label htmlFor="area">Area/Village/Street</label>
                            <input type="text" name="area" id="" className="add-input" />
                        </div>
                        <div className="add-input-group d-flex flex-column">
                            <label htmlFor="city">Town/City</label>
                            <input type="text" name="city" id="" className="add-input" />
                        </div>
                        <div className="add-input-group d-flex flex-column">
                            <label htmlFor="picode">Pincode</label>
                            <input type="number" name="pincode" id="" className="add-input" />
                        </div>
                        <div className="add-input-group d-flex flex-column">
                            <label htmlFor="state">State</label>
                            <select name="state" className='add-input' id="">
                                <option value="gujrat">Gujarat</option>
                                <option value="gujrat">Maharashtra</option>
                                <option value="gujrat">Goa</option>
                                <option value="gujrat">Rajsthan</option>
                            </select>
                        </div>
                        <div className="add-input-group d-flex mt-4">
                            <input type="submit" name="submit" id="" onClick={addaddress} className="add-input add-btn" value='Add Address' />
                        </div>
                    </form>
                </div>
            </div>}
            <br /><br /><br /><br /><br /><br /><br />
        </>
    )
}
