import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { PortableText } from '@portabletext/react'

import { AppWrap, MotionWrap } from '../../wrapper';

const myPortableTextComponents = {
    types: {
        image: ({ value }) => <div className={`blog-image-container ${value.align ? value.align[0] : ''}`}><img className={value.size ? value.size[0] : ''} src={value.asset.url} alt={value.alt} /></div>,

    },

    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a href={value.href} rel={rel}>
                    {children}
                </a>
            )
        },
    },
}


const Blog = () => {
    const { slug } = useParams()
    const [blog, setBlog] = useState()
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        const query = `*[slug.current == "${slug}"]{...,content[]{...,_type == "image" => {..., asset-> }  }    }`;

        axios.get('/.netlify/functions/getter', { params: { "query": `${query}` } })
            .then((data) => {
                console.log(data.data)
                const createdOn = new Date(data.data[0]._createdAt)
                setBlog({...data.data[0], createdOn: createdOn})
            })

    }, [])

    return (
        blog && <div className='app__blog-container'>
            <h2 className="blog-title">{blog.title}</h2>
            <h5>{blog.createdOn.toLocaleDateString('en-US', dateOptions)}</h5>
            <PortableText
                value={blog.content}
                components={myPortableTextComponents}
            />
            <Link to="/blog" className="blog-link bottom">Back to Blog Home</Link>
        </div>
    )
}

export default AppWrap(MotionWrap(Blog, 'app__blog'), 'blog', 'app__whitebg')