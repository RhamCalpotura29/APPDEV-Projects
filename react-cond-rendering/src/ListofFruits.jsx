import PropTypes from 'prop-types'

export default function ListofFruits(props) {
    // Corrected prop name to props.items
    const listitems = props.items.map(item =>
        <li key={item.id}>
            <strong>{item.name}</strong>: &nbsp; {item.color}
        </li>)

    return (
        <>
            <h3 className='list-category'>{props.category}</h3>
            <ol className='list'>{listitems}</ol>
        </>
    )
}

ListofFruits.defaultProps = {
    category: "Category: ",
    items: []
}

