import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Creatures.css'; // Adjust the path as necessary

function Creatures() {
    const [creatures, setCreatures] = useState([]);
    const file_path = './AO spreadsheet - Criaturas.csv';

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(file_path);
                const csvText = await response.text(); // Read the CSV content as text
                const parsedData = Papa.parse(csvText, { header: true, skipEmptyLines: true });
                setCreatures(parsedData.data);
            } catch (error) {
                console.error('Error reading CSV:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="creatures-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>HP</th>
                        <th>Attack</th>
                        <th>Evasion</th>
                        <th>Reward</th>
                        <th>Exp</th>
                        <th>Exp/Hp</th>
                    </tr>
                </thead>
                <tbody>
                    {creatures.map((creature, index) => (
                        <tr key={index}>
                            {/* Replace with your CSV column names */}
                            <td>{creature.Name}</td>
                            <td>{creature.HP}</td>
                            <td>{creature.Attack}</td>
                            <td>{creature.Evasion}</td>
                            <td>{creature.Reward}</td>
                            <td>{creature.Experience}</td>
                            <td>{creature.Exp_Hp}</td>
                            {/* More columns */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Creatures;
