import React, { useState } from 'react'
import './Card.css'
import daisyui from 'daisyui'
import '../index.css'

export default function Card() {

  const [name1, setname1] = useState('')
  const [image1, setimage1] = useState('')
  const [price1, setprice1] = useState('')
  const [a, seta] = useState([])
  const [move,setmove]=useState()

  // urgfkjeds

  function getValue(e) {
    let searchTerm = e.target.value;
    // console.log(searchTerm);

    {
      a.map((ele) => {
        let searchprice=ele.price;

        let foundResults = false;
    // if (searchTerm !== '') {
    //   show.forEach(link => {
    //   //     let gameName = link.querySelector('p').innerText.toLowerCase();
    //       if (ele.price.includes(searchTerm)) {
    //           ele.style.display = 'flex';
    //           foundResults = true;
    //       } else {
    //           ele.style.display = 'none';
    //       }
    //   });
    // } else {
    //   // // If search term is empty, show all game links
    //   // let gameLinks = document.querySelectorAll('.container a');
    //   // gameLinks.forEach(link => {
    //   //     link.style.display = 'flex';
    //   // });
    // }
    
    // let show = a.{price
    // console.log(show);
    
    // Perform the search operation
    // let foundResults = false;
    if (searchTerm !== '') {
      // show.forEach(link => {
        //     let gameName = link.querySelector('p').innerText.toLowerCase();
        if (ele.price.includes(searchTerm)) {
          // ele.style.display = 'flex';
          // foundResults = true;
          console.log(ele);
          console.log('mil gaya');
          setmove(a)
          
          seta([ele])
        } else {
          // ele.style.display = 'none';
        }
        // });
      } else {
        // // If search term is empty, show all game links
        // let gameLinks = document.querySelectorAll('.container a');
        // gameLinks.forEach(link => {
          //     link.style.display = 'flex';
          // });
      seta(move)
}
})
}

    // efjkvneflkvje

  }

  const add = () => {
    // console.log('Function',a);

    if (!name1 || !price1 || !image1) {

    } else {
      // let name=name1
      // let age=age1
      // let course=course1

      // name=name1
      // age=age1
      // course=course1
      seta([{ name: name1, price: price1, image: image1 }, ...a])
      console.log(a);
      setname1('')
      setprice1('')
      setimage1('')

      let move =a
      // ifjnlksdkcs



      // jfbcekdsj


    }

    //     if(!name1){

    //     }else{
    //         setitems( [...items,name1])
    //         setname('')
    //         console.log(items);
    //     }
    //     if(!age){

    //     }else{
    //         setitems2( [...items2,age])
    //         setage('')
    // console.log(items2);
    //     }
    //     if(!course ){

    //     }else{
    //         setitems3( [...items3,course])
    //         setcourse('')
    //     console.log( items3);
    //     }
  }

  return (
    <>

      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
   */}
        </div>
        <div className="drawer-side bg-[]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="bg-[#0b3549] flex justify-right gap-[2em] items-center menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><input type="text" placeholder="Product Name" className="input input-bordered input-success w-full max-w-xs " value={name1} onChange={(e) => { setname1(e.target.value) }} /></li>
            <li><input type="number" placeholder="Price" className="input input-bordered input-success w-full max-w-xs  ] " value={price1} onChange={(e) => { setprice1(e.target.value) }} /></li>
            <li><input type="text" placeholder="Image" className="input input-bordered input-success w-full max-w-xs   " value={image1} onChange={(e) => { setimage1(e.target.value) }} /></li>
            <li><button className="btn btn-active btn-primary w-24  mb-[[10em]" onClick={() => { add(name1, image1, price1) }}>ADD</button></li>
          </ul>

        </div>
      </div>


      {/* sidebar */}



      {/* <input type="text" placeholder="Product Name" className="input input-bordered input-success w-full max-w-xs ml-[3em] mt-10" value={name1} onChange={(e) => { setname1(e.target.value) }} />
    <input type="number" placeholder="Price" className="input input-bordered input-success w-full max-w-xs  ml-[3em] mt-10" value={price1} onChange={(e) => { setprice1(e.target.value) }} />
    <input type="text" placeholder="Image" className="input input-bordered input-success w-full max-w-xs ml-[3em]  mt-10" value={image1} onChange={(e) => { setimage1(e.target.value) }} />
    <button className="btn btn-active btn-primary ml-10 mt-10" onClick={() => { add(name1, image1, price1) }}>ADD</button> */}


      {/* <input type="text" name='name' placeholder='Product Name' value={name1} onChange={(e) => { setname1(e.target.value) }} />
      <input type="number" name='price' placeholder='Price' value={price1} onChange={(e) => { setprice1(e.target.value) }} />
      <input type="text" name='image' placeholder='Image' value={image1} onChange={(e) => { setimage1(e.target.value) }} />
      <button onClick={() => { add(name1, image1, price1) }}>Add</button> */}

      <div className="form-control mt-[-38em]  ml-[65em]">
        <div className="input-group">
          <input type="text" placeholder="Search…" className="input input-bordered" onChange={getValue} />
          <button className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div><br />
      <hr />

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-3 overflow-auto h-[30em] xl:gap-x-8  mt-[2em]  ml-[22em] mr-4">
       
      {
      a.map((elem,ind)=>{
              
              return(
                // <div className='div'>
                //   <img className='img' src={elem.image} alt="" />
                // <h1 className='name'>{elem.name}</h1>
                // <h4 className='price'>{elem.price}</h4>
                // </div>
                

                
            <div className="card w-[18em] h-[25em] bg-base-100 shadow-xl ">
              <figure><img src={elem.image} alt={elem.name} className="object-cover w-[30em] h-[20em]" /></figure>
              <div className="card-body">
                <h2 className="card-title">{elem.name}</h2>
                <p>{elem.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>

              )
              

})
}

      </div>
      





    </>
  )
}