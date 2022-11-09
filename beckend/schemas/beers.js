export default {
    name: 'beer',
    type: 'document',
    title: 'Beer',
    fields: [
        {
            name: 'beerName',
            type: 'string',
            title: 'Beer Name',
        },
        {
            name: 'beerType',
            type: 'string',
            title: 'Beer Type',
        },
        {
            name: 'beerABV',
            type: 'number',
            title: 'Beer ABV',
        },
        {
            name: 'beerIBU',
            type: 'number',
            title: 'Beer IBU',
        },
        {
            name: 'breweryLogo',
            type: 'image',
            title: 'Brewery Logo',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'beerLowPrice',
            type: 'number',
            title: 'Beer Low Price',
        },
        {
            name: 'beerHighPrice',
            type: 'number',
            title: 'Beer High Price',
        },
        {
            name: 'newBeer',
            type: 'boolean',
            title: 'New beer on tap!',
            description: 'New beer on tap!',
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published At',
        },
        
    ]
}