import React, { useState, useEffect } from "react"
import { Link, Routes, Route } from "react-router-dom"
import axios from "axios"

import { PortableText } from "@portabletext/react"

import { AppWrap, MotionWrap } from "../../wrapper"
import "./Blogs.scss"

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className={`blog-image-container ${value.align ? value.align[0] : ""}`}>
        <img className={value.size ? value.size[0] : ""} src={value.asset.url} alt={value.alt} />
      </div>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
}

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" }

  useEffect(() => {
    const query =
      '*[_type == "blogPost" && !(_id in path("drafts.**"))]{...,content[]{...,_type == "image" => {..., asset-> }  }    } | order(_createdAt desc)  '

    axios.get("/.netlify/functions/getter", { params: { query: `${query}` } }).then((data) => {
      setBlogs(data.data)
    })
  }, [])

  // window.onscroll = function() {
  //   if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
  //   alert('At the bottom!')
  //   }
  // }

  return (
    <div className="app__blogs-container">
      <div className="app__blogs-header"><h1>Welcome to my Blog!</h1><h4>Below you'll find some of my thoughts on weddings, ceremonies, and the wedding industry.</h4></div>
      {blogs.length > 0 && (
        <>
          {blogs.map((blog, index) => {
            const createdOn = new Date(blog._createdAt)

            return (
              <>
                <div className="app__blog-container loop" key={`${index}-${blog.title}`}>
                  <Link className="blog-link" to={blog.slug.current}>
                    <h2 className="blog-title">{blog.title}</h2>
                  </Link>
                  <h5>{createdOn.toLocaleDateString("en-US", dateOptions)}</h5>
                  <PortableText value={blog.content} components={myPortableTextComponents} />
                </div>
                <Link className="blog-link bottom" to={blog.slug.current}>
                  <p>Read More</p>
                </Link>
              </>
            )
          })}
          <div className="app__blogs-end">
            <h5>You've reached the bottom!</h5>
          </div>
        </>
      )}
    </div>
  )
}

export default AppWrap(MotionWrap(Blogs, "app__blog"), "blog", "app__whitebg")
