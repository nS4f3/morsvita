import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

{
  console.log(document.location)

  }



// function HelloWorld() {
//   return (
//     <div>
//     <div className="contanier">
//       <h1>Mors Et Vita!</h1>
//       <div className="contanier-vision">
//       <div className="blogs-vision">
//         <p>dasdasdsadas</p>
//         <p>dasdasdsadas</p>
//         <p>dasdasdsadas</p>
//         <p>dasdasdsadas</p>
//         <p>dasdasdsadas</p>
//         <p>dasdasdsadas</p>
//         <p>dasdasdsadas</p>
        
//         </div>



//       </div>
//       <div className="contanier-all">
//         <div className="blogs">
//         <p>dasdasdsadas</p>
        
//         </div>


//         <div className="blogs">
//         <p>dasdasdsadas</p>
        
//         </div>
//         <div className="blogs">
//         <p>dasdasdsadas</p>
        
//         </div>
//         <div className="blogs">
//         <p>dasdasdsadas</p>
        
//         </div>
//         <div className="blogs">
//         <p>dasdasdsadacdsadasdas</p>
        
//         </div>

       

//       </div>

//       </div>

//       <div className="footer">
//         <ul>
//           <li><a href="test"></a></li>

//         </ul>

//       </div>
//       <style global jsx>{`
       
//   .blogs {
//     border-radius: 10px 20px;
//     border: solid 1px #cccccc;
//     max-width:370px;
//     width:100%;
//     margin:10px;
//     float:left;



//   }
//   .blogs-vision {
//     border-radius: 10px 20px;
//     border: solid 1px #cccccc;
//     max-width:630px;
//     width:100%;
//     margin:10px;
//     float:left;



//   }
  
//   .contanier-vision{
//     margin:20px;
//     border-radius: 15px 30px;
//     border : 2px solid #cccccc;
//     max-width:650px;
//     width:100%;
//     text-align:center;
//     display:inline-block
    
//   }
//   .contanier-all {
//     margin:20px;
//     border-radius: 15px 30px;
//     border : 2px solid #cccccc;
//     max-width:800px;
//     width:100%;
//     text-align:center;
//     display:inline-block;
    



//   }

//   .contanier {
//     align-items:center;
//     text-align:center
//   }

//   .footer {

//     margin:20px;
//     border-radius: 15px 30px;
//     border : .2px solid #cccccc;
//     max-width:800px;
//     width:100%;
//     text-align:center;
//     margin-left:20%;
//     float:left;
   


//   }
//   ul li {
//     list-style:none;
//   }
//       `}</style>

//     </div>
   
//   )
// }

// export default HelloWorld

// end of first design ~

// ~ strat of second design






var storage = 2;

const vision1 = () => {
 

  var v1 = document.getElementById("blogs-vision1");
  var v2 = document.getElementById("blogs-vision2");
  var v3 = document.getElementById("blogs-vision3");

 
  v1.style.marginLeft = '0.5%';
  v3.style.marginLeft ="1";
  v2.style.marginLeft = "0";
 

  
}

const vision2 = () => {
 

  var v1 = document.getElementById("blogs-vision1");
  var v2 = document.getElementById("blogs-vision2");
  var v3 = document.getElementById("blogs-vision3");

 

  v1.style.marginLeft = '-15.4%';
  v2.style.marginLeft = "1%";
  

}


const vision3 = () => {
 

  var v1 = document.getElementById("blogs-vision1");
  var v2 = document.getElementById("blogs-vision2");
  var v3 = document.getElementById("blogs-vision3");

 
  v1.style.marginLeft = '-35%';
  v2.style.marginLeft = '5.8%';
  v3.style.marginLeft = "0.2%";

  

}

  




  


const Home = ({posts}) => (
  <div>
     
  <div className="contanier">
    <h1>Mors Et Vita!</h1>
    
    <div className="slidershow middle">

    <div className="navi">
        <label for="r1" id="bar1" onClick={vision1}></label>
        <label for="r2" id="bar2" onClick={vision2}></label>
        <label for="r3" id="bar3" onClick={vision3}></label>

      </div>
    


    
    <div className="slides">


      <input type="radio" name="r" id="r1" ></input>
      <input type="radio" name="r" id="r2"></input>
      <input type="radio" name="r" id="r3"></input>

      <div id='blogs-vision1' style={{backgroundImage:`url(${posts[0].back})`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center'
    }} >

     
        

      <h2 className="hero-title">
        <Link href={posts[0].slug}>
          <a>{posts[0].title}</a>

        </Link>
      </h2>
        
      <div className="blog-date">
        <p>
        {posts[0].date}
        </p>
      </div>

      
      
      
      
      </div> 

      

      <div id='blogs-vision2'  style={{backgroundImage:`url(${posts[1].back})`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center'
    }}>

        <h2 className="hero-title">
        <Link href={posts[1].slug}>
          <a>{posts[1].title}</a>

      </Link>
      </h2>
  
          <div className="blog-date">
         <p>
         {posts[1].date}
         </p>
        </div>



          </div> 

    <div id='blogs-vision3'  style={{backgroundImage:`url(${posts[2].back})`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center'
    }} >

      <h2 className="hero-title">
        <Link href={posts[2].slug}>
          <a>{posts[2].title}</a>

        </Link>
      </h2>
        
      <div className="blog-date">
        <p>
        {posts[2].date}
        </p>
      </div>
      
    
      
      </div> 

      </div>

    

     


      
    </div>

    
     

    <div className="devider">

    </div>

    



    <div className="contanier-all">

   

    {posts.map((post,index) => {

      if(index > (storage - 1)){
      
      
      return(

      <div className="blogs-all">


        <div className="blog-title-link">
      <h2>
        <Link href={post.slug}>
    <a>{post.title}</a>

        </Link>
      </h2>
      </div>


      <div className="blog-date">
        <p>
        {post.date}
        </p>
      </div>

      
      </div>)
      }
     
    })}
    

    </div>
 




    </div>




    <div className="footer">
      <ul>
        <li><a href="test"></a></li>

      </ul>

    </div>
    <style global jsx>{`

 

.slidershow {
  max-width:700px;
  width:100%;
  height:300px;
  overflow:hidden;
  margin 0 auto;
  margin-bottom:30px;
}

.middle{
  text-align:center;

}

.navi {
  position:relative;
  top:80%;
  left:40%;
  width:100%;
  max-width:450px;
  height:10px;
  display:flex;

}
#bar1 {
  max-width:40px;
  width:100%;
  height:10px;
  border: solid #cccccc 1px;
  cursor:pointer;
  transition: 0.4s;
  border-radius: 8px 1px;
}

#bar2 {
  max-width:40px;
  width:100%;
  height:10px;
  border: solid #cccccc 1px;
  cursor:pointer;
  transition: 0.4s;
  border-radius: 8px 1px;
}

#bar3 {
  max-width:40px;
  width:100%;
  height:10px;
  border: solid #cccccc 1px;
  cursor:pointer;
  transition: 0.4s;
  border-radius: 8px 1px;
}


#bar1:hover{
  background-color: #e67e22 ;

}
#bar2:hover{
  background-color: #e67e22 ;

}
#bar3:hover{
  background-color: #e67e22 ;

}

input[name='r']{
  position:absolute;
  top:20px;
  visibility:hidden;

  

}

.slides{
  display:inline-flex;
  max-witdh:210px;
  width:670%;
  transition: .5s;

}


.hero-title {
  font-size:16px;
  float:right;
  margin:10px;
  margin-top:40px;

}
     
.blogs-all {
  border-radius: 10px 20px;
  border: solid 1px #cccccc;
  max-width:370px;
  width:100%;
  margin:20px;
  float:left;
}

.blog-date {
  float:left;
  margin-left:8px;
  margin-top:8px;
  margin-bottom:8px;
  border-radius: 20px 3px;
  background-color:red;
  height:30px;
  width:130px;
  text-align:center;
}


.blog-date p {
  font-size:11px;
  color:#F2F2F2;
  text-align:center;
}



.devider {
  max-width:800px;
  width:100%;
  border-radius: 10px 20px;
  border: .3px solid  #f45c73;
  margin: 0 auto;

}

img {
  position:relative;
  width:100%;
  height:20%;
  z-index:-1;

}






#blogs-vision1{
  border-radius: 10px 20px;
  border: solid 1px #cccccc;
  max-width:675px;
  width:100%;
  float:center;
  margin :10px;
  height:270px;
  transition: .6s;

  

  
}

#blogs-vision2{
  border-radius: 10px 20px;
  border: solid 1px #cccccc;
  max-width:675px;
  width:100%;
  float:center;
  margin :10px;
  transition: .6s;
  height:270px;

 


  
}

#blogs-vision3{
  border-radius: 10px 20px;
  border: solid 1px #cccccc;
  max-width:675px;
  width:100%;
  float:center;
  margin :10px;
  height:270px;
  transition: .6s;

  
}

.contanier-vision{
  margin:20px;
  border-radius: 15px 30px;
  border : 2px solid #cccccc;
  max-width:650px;
  width:100%;
  text-align:center;
  display:inline-block
  

}
.contanier-all {
  margin:20px;
  border-radius: 15px 30px;
  border : 2px solid #cccccc;
  max-width:800px;
  width:100%;
  text-align:center;
  display:inline-block;
  



}

.contanier {
  align-items:center;
  text-align:center
}

.footer {


  border-radius: 15px 30px;
  border : .2px solid #cccccc;
  max-width:800px;
  width:100%;
  text-align:center;
  margin: 0 auto;
  

 


}
ul li {
  list-style:none;
}

a {
  text-decoration:none;
  color:   #f06540 ;
}






    `}</style>

  </div>
 
);



Home.getInitialProps = async ({ req }) => {
  const res = await fetch('https://morsvita.herokuapp.com/api/posts')
  const json = await res.json()
  return { posts:json.posts }
}


export default Home;

