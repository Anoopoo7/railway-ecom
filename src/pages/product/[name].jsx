import ProductContainer from '@widgets/product/container/productContainer'

const ProductDetails = () => {
  const res = {
    wishlisted: true,
    name:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam recusandae nisi saepe!',
    options: [
      {
        varient: '2D',
        price: 4500,
        quantity: 10,
        off: 45,
        pictures: [
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
        ],
        pkey: 'ASERFT3E5600',
      },
      {
        varient: '1D',
        price: 4200,
        quantity: 10,
        off: 45,
        pictures: [
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
        ],
        pkey: 'ASERFT3E5601',
      },
      {
        varient: '2DX',
        price: 4600,
        quantity: 10,
        off: 45,
        pictures: [
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
        ],
        pkey: 'ASERFT3E5603',
      },
      {
        varient: '3D',
        price: 4700,
        quantity: 10,
        off: 45,
        pictures: [
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
          'https://m.media-amazon.com/images/I/41AP5QV2M0L._AC_SR400,600_.jpg',
        ],
        pkey: 'ASERFT3E5602',
      },
    ],
    offers: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ea,',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ea,',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ea,',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ea,',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ea,',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ea,',
    ],
    badges: {},
    related: {
      active: true,
      type: 'Product',
      hideTitle: false,
      title: 'Related products',
      items: [
        {
          image:
            'https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg',
          name: 'Wireless Bluetooth Over The Ear ...',
          price: '12,000',
          isWislisted: false,
          badge: {},
          link: '/',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg',
          name: 'Wireless Bluetooth Over The Ear ...',
          price: '12,000',
          isWislisted: false,
          badge: {},
          link: '/',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg',
          name: 'Wireless Bluetooth Over The Ear ...',
          price: '12,000',
          isWislisted: true,
          badge: {},
          link: '/',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg',
          name: 'Wireless Bluetooth Over The Ear ...',
          price: '12,000',
          isWislisted: false,
          badge: {},
          link: '/',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg',
          name: 'Wireless Bluetooth Over The Ear ...',
          price: '12,000',
          isWislisted: false,
          badge: {},
          link: '/',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg',
          name: 'Wireless Bluetooth Over The Ear ...',
          price: '12,000',
          isWislisted: false,
          badge: {},
          link: '/',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg',
          name: 'Wireless Bluetooth Over The Ear ...',
          price: '12,000',
          isWislisted: false,
          badge: {},
          link: '/',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg',
          name: 'Wireless Bluetooth Over The Ear ...',
          price: '12,000',
          isWislisted: false,
          badge: {},
          link: '/',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg',
          name: 'Wireless Bluetooth Over The Ear ...',
          price: '12,000',
          isWislisted: false,
          badge: {},
          link: '/',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg',
          name: 'Wireless Bluetooth Over The Ear ...',
          price: '12,000',
          isWislisted: false,
          badge: {},
          link: '/',
        },
        {
          image:
            'https://m.media-amazon.com/images/I/41tn36moU5L._AC_SR400,600_.jpg',
          name: 'Wireless Bluetooth Over The Ear ...',
          price: '12,000',
          isWislisted: false,
          badge: {},
          link: '/',
        },
      ],
    },
  }
  return <ProductContainer res={res} />
}

export default ProductDetails
