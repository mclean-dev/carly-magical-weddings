export default{
    name:'stickers',
    title:'Stickers',
    type: 'document',
    fields:[
        {
            name:'imgUrl',
            title:'ImgUrl',
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
                    }
                    

                }
            ]
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'url',
            title:'Url (if sticker is also a link)',
            type:'string'
        },
    ]
}