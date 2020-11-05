import React, { Component } from 'react'

export default class filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Product</div>
                <div className="filter-sort">
                    Order
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="heighest">Heighest</option>
                    </select>
                    {""}
                </div>
                <div className="filter-size">
                    Filter
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">All</option>
                        <option value="Sx">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXl">XXl</option>
                    </select>
                </div>
            </div>
        )
    }
}
