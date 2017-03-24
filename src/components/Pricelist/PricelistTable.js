import React, { Component, PropTypes } from 'react'
import map from 'lodash/map'
import Row from './PricelistRow'
import Header from './PricelistHeader'

const styles = {
  base: {
    borderBottom: '1px solid rgba(200,200,190,.25)',
    borderCollapse: 'collapse',
    border: 0,
    fontSize: '0.85rem',
    marginBottom: '20px',
    tableLayout: 'fixed',
    width: '100%',
    minWidth: '69rem',
  },
}

class PricelistTable extends Component {
  shouldComponentUpdate(nextProps) {
    const compare = nextProps.items !== this.props.items
    return compare
  }
  render() {
    const { columns, items, printWhenColor } = this.props
    return (
      <div className="table-scroll">
        <table style={styles.base}>
          <Header columns={columns} />
          <tbody>
            {map(items, item => (
              <Row columns={columns} item={item} key={item.id} printWhenColor={printWhenColor} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

PricelistTable.propTypes = {
  columns: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  printWhenColor: PropTypes.object.isRequired,
}
PricelistTable.defaultProps = {
}
export default PricelistTable
