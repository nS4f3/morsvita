import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const Blog = ({post}) => (
    <div>
    <div className="contanier">
      <h1>Mors Et Vita!</h1>

      <div className="devider-hero">
        
      </div>

      <div className="Blog-title">
      <h2>
        <Link href={post.slug}>
    <a>{post.title}</a>

        </Link>
      </h2>
    
  
  
      <div className="devider">
        
        </div>
  
  
  
      </div>

      <div className="post-back" style={{backgroundImage:`url(${post.back})`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center'
    }}>

      </div>
  
      <div className="devider">
        
      </div>
      <div className="Blog-post">

        <div className="blog">
        <ReactMarkdown source={post.details}/>
            
        
     </div>

  

  
      </div>
  
      </div>
  
    
      <style global jsx>{`
       
  .blog {
    font-family: verdana;
    max-width:800px;
    width:100%;
    margin:10px;
    margin-top:30px;
    text-align:left;
    padding:5px;
  }
  
  .Blog-title {
    border-radius: 10px 20px;
    border: solid 1px #cccccc;
    max-width:370px;
    width:100%;
    margin:10px;
    margin 0 auto;
    margin-bottom:30px;
  }
  
  .devider-hero {
    max-width:370px;
    width:100%;
    border-radius: 10px 20px;
    border: .3px solid  #f45c73;
    margin: 0 auto;
    margin-bottom:30px;
  }
  
  
  .devider {
    max-width:800px;
    width:100%;
    border-radius: 10px 20px;
    border: .3px solid  #f45c73;
    margin: 0 auto;
  }
  
  
  
  
  }
  .Blog-post {
    margin:20px;
    max-width:800px;
    width:100%;
    margin: 0 auto;
    
  
  
  
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
    color: #f06540 ;
  }

  .post-back {
    margin: 0 auto;
    witdth: 100%;
    max-width: 500px;
    height: 200px;
    border-radius: 12px 20px;
    border: 1px solid #cccccc;
  }
      `}</style>
  
    </div>

  );
  
Blog.getInitialProps = async ({ req, query }) => {
    const res = await fetch(`https://morsvita.herokuapp.com/api/post/${query.postid}`);
    const json = await res.json();
    return { post:json.post };
  };
  
  
  export default Blog;
  
  
