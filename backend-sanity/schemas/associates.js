export default{
    name:'associates',
    title:'Associates',
    type:'document',
    fields:[
        {
            name:'category',
            title:'Category',
            type:'string'
        },
        {
            name: 'businesses',
            title: 'Businesses',
            type: 'array',
            of : [
                {
                    title: 'Business',
                    type: 'object',
                    fields: [
                    {
                        name: 'name',
                        title: 'Name',
                        type: 'string'
                    },
                    {
                        name: 'url',
                        title: 'Url',
                        type: 'string'
                    }
                    ]
                }                
            ]
        }
       
    ]
}