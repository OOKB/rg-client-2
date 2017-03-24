import { keyBy, set } from 'lodash'
import { insertFields } from 'redux-graph'

import showrooms from './showrooms'

const entity = keyBy(showrooms, 'id')

export const defaultUser = { id: 'user0', type: 'Person', name: 'Anonymous' }
export const dataFeed = { id: 'pBlf', type: 'DataFeed', title: 'DL Order Track Data' }
export const webAppEntity = { id: 'delanyLongWebApp', type: 'WebApplication' }

// Just use actions??
set(entity, 'Person.user0', insertFields(defaultUser))
set(entity, 'DataFeed.pBlf', insertFields(dataFeed))
set(entity, 'WebApplication.delanyLongWebApp', insertFields(webAppEntity))

const state = {
  db: {
    about: [
      `DeLany & Long Ltd. was established by the creative team of John Flynn and Jamie Gould, founders of Rogers & Goffigon Ltd. The wholly independent company is dedicated to the design and marketing of distinctive textiles for outdoor applications. We bring to the outdoor fabric market the signature style and quality which make Rogers & Goffigon an important resource for fine interior fabrics.`,
      `DeLany & Long fabrics are marked by a singular approach to color, texture and construction and are developed and produced in collaboration with European specialty mills. Colorways include solids, stripes and textures in a subtle, muted palette. Our colors are derived from vegetable dyes, chosen because they reflect nature rather than compete with it. Our weaves have visual and tactile interest not found in outdoor fabrics currently in the marketplace. The quality of our construction reflects the long tradition of our mill partners in weaving fine fabrics.`,
      `DeLany & Long fabrics transition between inside and outside. They are ideal for use in the home garden, patio and poolside, at hotels and resorts, on beaches and boats. And they are also inspired solutions for playrooms, kitchens, sunrooms and other interior areas subject to hard wear.`,
    ],
    service: `DeLany & Long is a small, focused company, responsive to our customers and committed to quality service. Our combination of exceptional service and product availability makes us unique in the industry. Our Customer Service department is directed and staffed by experienced professionals. All of our fabrics are woven to order for us and we maintain a large inventory at our Greenwich, Connecticut location. Business is conducted on a pro forma basis and most fabrics can be shipped immediately.`,
    distributed: `DeLany & Long fabrics are distributed through Rogers & Goffigon sales representatives and a growing group of allied business distributors.`,
    samples: `6 x 6 inch memo samples are available for all fabrics. <a href="/contact">Please contact your local showroom or sales representative</a> to order them.`,
    orders: `For fabric pricing and ordering <a href="/contact">please contact your local showroom or sales representative</a>.`,
    questions: `Please check our <a href="/contact">distributors page to find the closest showroom</a>. If you have any questions about who to call please contact our headquarters office in Greenwich, Connecticut.`,
    summerSaleTxt: [
      'All sales are final.',
      'All fabrics are sold as it.',
      'No returns or exchanges.',
    ],
    categoryOptions: [ 'textile', 'trim', 'drapery', 'leather' ],
    detailFields: [ 'categoryCode', 'id', 'name', 'color', 'contents', 'approxWidth', 'price' ],
    sisterSite: {
      title: 'For the Rogers & Goffigon collection click here.',
      href: 'http://www.rogersandgoffigon.com/',
    },
    disclaimer: {
      content: 'Colors and scale shown are not exact. Please request actual samples from your',
      link: {
        title: 'Delany & Long sales representative',
        href: '/contact',
      },
    },
    pricelist: {
      columns: {
        textile: [ 'categoryCode', 'id', 'name', 'img', 'color', 'price', 'contents', 'repeat', 'approxWidth' ],
        trim: [ 'categoryCode', 'id', 'name', 'img', 'color', 'price', 'contents', 'approxWidth' ],
        drapery: [ 'categoryCode', 'id', 'name', 'img', 'color', 'price', 'contents', 'repeat', 'approxWidth' ],
        leather: [
          'categoryCode', 'id', 'name', 'img', 'color', 'price', 'contents',
          { value: 'approxWidth', label: 'Approx. Hide Size' },
        ],
      },
      colorColumnValues: [ 'id', 'color' ],
      // defaultCategory: 'textile',
      prefix: {
        category: [ 'pricelist', 'category' ],
        color: [ 'pricelist', 'color' ],
        pgIndex: [ 'pricelist', 'pgIndex' ],
        pgSize: [ 'pricelist', 'pgSize' ],
        text: [ 'pricelist', 'text' ],
        display: [ 'pricelist', 'display' ],
        discontinued: [ 'pricelist', 'discontinued' ],
      },
      printWhenColor: { id: 'colorNumber', color: 'color', img: 'img' },
    },
    menu: [
      {
        id: 'about',
        href: '/about',
        label: 'About Us',
        icon: 'info-circle-btm',
      },
      {
        id: 'contact',
        href: '/contact',
        label: 'Contact Us',
        icon: 'envelope-o',
      },
      {
        id: 'pricelist',
        href: '/collection',
        icon: 'object-ungroup',
        label: 'The Collection',
      },
      {
        id: 'tradeLogin',
        href: '/login',
        icon: 'trade-login',
        label: 'Trade Login',
        validators: [ 'isAnonymous' ],
      },
      {
        id: 'logout',
        action: 'logout',
        icon: 'sign-out',
        label: 'Logout',
        validators: [ 'isAuthenticated' ],
      },
      {
        id: 'project',
        href: '/project/',
        icon: 'heart-o',
        label: 'Favorites',
        validators: [ 'isAnonymous', 'hasFavorites' ],
      },
      {
        id: 'projects',
        href: '/project',
        icon: 'heart-o',
        label: 'Projects',
        validators: [ 'isAuthenticated', 'hasFavorites' ],
      },
    ],
    schema: {
      id: {
        label: 'Item#',
      },
      approxWidth: {
        label: 'Approx. Width',
      },
      category: {
        label: '',
      },
      color: {
        label: 'Color',
      },
      colorNumber: {
        label: 'Color Number',
      },
      contents: {
        label: 'Content',
      },
      drapery: {
        code: 'W',
        label: 'Window Treatment',
      },
      img: {
        label: 'Image',
      },
      leather: {
        code: 'L',
        label: 'Leather',
      },
      name: {
        label: 'Pattern Name',
      },
      originCountry: {
        label: 'Origin',
      },
      price: {
        label: 'Net Price',
        validators: [ 'isAuthenticated' ],
      },
      repeat: {
        label: 'Approx. Repeat',
      },
      textile: {
        code: 'T',
        label: 'Textile',
      },
      trim: {
        code: 'P',
        label: 'Passementerie',
      },
    },
    styles: [
      { value: 'list', label: 'List' },
      { value: 'grid', label: 'Grid' },
      { value: 'film', label: 'Horizontal (Trio)' },
    ],
    trade: {
      actQ: "Do you have an existing account with us but don't know your login information?",
      mustHave: 'You must have a Trade Account to view prices and utilize the other special features, like saving custom projects and viewing sale items.',
      noActQ: 'Are you a trades person and without an existing account?',
      small: 'Accounts are available to trades people only (designers, re-sellers and industry members) and are not meant for regular customers.',
    },
  },
  graph2: {
    entity,
  },
}

export default state
