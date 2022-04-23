export default{
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'text'
        },
        {
            name: 'imgUrl',
            title: 'Image URL',
            type: 'image',
            options: {
                hotspot: true,
            }, 
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
            ]
        },
        {
            name: 'order', 
            title: 'order',
            type: 'number',
            hidden: true,
        },
    ]
}