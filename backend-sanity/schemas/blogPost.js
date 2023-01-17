export default {
    name: 'blogPost',
    title: 'Blog Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Unique Blog Url (suggestion: autogenerate or base on title)',
            type: 'slug',
            options: {
                source: 'title',
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'blog-image-normal' },
                        { title: 'H1', value: 'blog-image-h1' },
                        { title: 'H2', value: 'blog-image-h2' },
                        { title: 'H3', value: 'blog-image-h3' },
                        { title: 'H4', value: 'blog-image-h4' },
                        { title: 'H5', value: 'blog-image-h5' },
                        { title: 'H6', value: 'blog-image-h6' },
                        { title: 'Quote', value: 'blog-image-blockquote' }
                    ]
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            title: 'Img alt text',
                            type: 'string',
                            options: {
                                isHighlighted: true
                            },
                        },
                        {
                            name: 'attribution',
                            title: 'Attribution',
                            type: 'string',
                            options: {
                                isHighlighted: true
                            },
                        },
                        {
                            name: 'size',
                            title: 'Size',
                            type: 'array',
                            of: [{ type: 'string' }],
                            options: {
                                list: [
                                    { title: 'Small', value: 'blog-image-small' },
                                    { title: 'Medium', value: 'blog-image-medium' },
                                    { title: 'Large', value: 'blog-image-large' },
                                    { title: 'Full Width', value: 'blog-image-full' }
                                ],
                                isHighlighted: true
                            }
                        },
                        {
                            name: 'align',
                            title: 'Alignment',
                            type: 'array',
                            of: [{ type: 'string' }],
                            options: {
                                list: [
                                    { title: 'Left', value: 'blog-image-left' },
                                    { title: 'Center', value: 'blog-image-center' },
                                    { title: 'Right', value: 'blog-image-right' }
                                ],
                                isHighlighted: true
                            }

                        }
                    ]
                }

            ]
        },
        // {
        //     name: 'order',
        //     title: 'order',
        //     type: 'number',
        //     hidden: true,
        // },
    ]
}
