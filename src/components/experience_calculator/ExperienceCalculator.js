import React, { useState } from 'react';
import './ExperienceCalculator.css';
import { calcRequiredExp, calcNpcs } from '../../utils/calculator_utils';

function ExperienceCalculator() {
    const [formData, setFormData] = useState({
        startLevel: '',
        targetLevel: '',
        currentExp: 0,
        npcExp: '',
        isParty: false,
        partyPercentage: 0
    });

    const [results, setResults] = useState({
        requiredExp: null,
        npcCount: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleToggle = () => {
        setFormData({ ...formData, isParty: !formData.isParty });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const requiredExp = calcRequiredExp(
                parseInt(formData.startLevel),
                parseInt(formData.targetLevel),
                parseFloat(formData.currentExp) / 100 // Assuming percentage input
            );

            let npcCount = null;
            if (formData.npcExp !== '') {
                npcCount = calcNpcs(
                    requiredExp,
                    parseInt(formData.npcExp),
                    formData.isParty,
                    parseFloat(formData.partyPercentage) / 100
                );
            }

            setResults({
                requiredExp,
                npcCount
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="experience-calculator">
            <h1>RPG Experience Calculator</h1>
            <form onSubmit={handleSubmit} className="form-container">

                <div className="form-group">
                    <label htmlFor="startLevel">Start Level:</label>
                    <input type="number" id="startLevel" name="startLevel" 
                        value={formData.startLevel} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="targetLevel">Target Level:</label>
                    <input type="number" id="targetLevel" name="targetLevel" value={formData.targetLevel} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="currentExp">Current Experience (%):</label>
                    <input type="number" id="currentExp" name="currentExp" 
                        value={formData.currentExp} onChange={handleChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="npc">NPC Exp (Optional):</label>
                    <input type="number" id="npcExp" name="npcExp" 
                        value={formData.npcExp} onChange={handleChange}/>
                </div>

                <div className="column">
                    <div className="form-group">
                        <label htmlFor="isParty">Is Party:</label>
                        <input type="checkbox" id="isParty" name="isParty"
                            checked={formData.isParty} onChange={handleToggle}/>
                    </div>
                    {formData.isParty && (
                        <div className="form-group">
                            <label htmlFor="partyPercentage">Party percentage (%):</label>
                            <input type="number" id="partyPercentage" name="partyPercentage"
                                value={formData.partyPercentage} onChange={handleChange} required/>
                        </div>)}

                </div>
                <button type="submit">Calculate</button>
            </form>

            {results.requiredExp !== null && (
                <div className="results">
                    <p>Required Experience: {results.requiredExp}</p>
                    <p>Number of NPCs: {results.npcCount}</p>
                </div>
            )}
        </div>
    );
}

export default ExperienceCalculator;
