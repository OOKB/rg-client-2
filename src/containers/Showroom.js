import { connect } from 'react-redux'

import { userSalesOffice } from '../select/contact'
import Component from '../components/Showroom'

export default connect(userSalesOffice)(Component)
