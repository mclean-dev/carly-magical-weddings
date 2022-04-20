export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'service',
            title: 'Service Name',
            type: 'string'
        },
        {
            name: 'url',
            title: 'Link Url (optional)',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'tag',
            title: 'Category',
            type: 'string'
        }
    ]
}