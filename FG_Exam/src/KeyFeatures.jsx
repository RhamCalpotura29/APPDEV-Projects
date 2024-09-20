function KeyFeatures({features}) {
    return(
        <div>
            <h3> Key Features</h3>
            <ul>
                {features.map((features, index) => (<li key={index}>{features}</li>))}
            </ul>
            
        </div>
    );
}
export default KeyFeatures