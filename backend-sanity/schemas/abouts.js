export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string'

        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text'
        }
    
        
    ]
}