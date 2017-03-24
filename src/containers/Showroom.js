import { connect } from 'react-redux'

import { userSalesOffice } from '../redux/select/contact'
import Component from '../components/Showroom'

export default connect(userSalesOffice)(Component)
