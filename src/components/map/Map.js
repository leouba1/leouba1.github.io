import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Map.css';

function Map() {
    const [listItems, setListItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const imageUrl = "./mapa.png";
    const csvFile = "/map.csv";

    useEffect(() => {
        async function fetchAndParseCSV() {
            try {
                const response = await fetch(csvFile);
                const csvText = await response.text();
                console.log(csvText);
                const parsedData = Papa.parse(csvText, { header: true, skipEmptyLines: true });
                setListItems(parsedData.data);
            } catch (error) {
                console.error('Error reading CSV:', error);
            }
        }

        fetchAndParseCSV();
    }, [csvFile]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    // Filtered items based on search query
    const filteredItems = listItems.filter(item =>
        Object.values(item).some(value =>
            value.toString().toLowerCase().includes(searchQuery)
        )
    );

    return (
        <div className="image-with-list">
            <div className="image-container">
                <img src={imageUrl} alt="Displayed" />
            </div>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="list-container">
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Resource</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Number}</td>
                                <td>{item.Name}</td>
                                <td>{item.Type}</td>
                                <td>{item.Resource}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Map;
