import React, { useState } from 'react';

const PutValueComponent = () => {
    const [key, setKey] = useState<string>('test');
    const [value, setValue] = useState<string>('');
    const [responseMessage, setResponseMessage] = useState<string>('');

    // Function to handle PUT request
    const putValue = async () => {
        try {
            const url = `https://my-worker.jung-pt.workers.dev/${key}`;

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Origin': window.location.origin, // Explicitly set the origin header if needed
                },
                body: JSON.stringify({ value }),
            });

            if (response.ok) {
                setResponseMessage('Value stored successfully');
            } else {
                setResponseMessage('Failed to store value');
            }
        } catch (error) {
            setResponseMessage('Error: ' + error);
        }
    };

    return (
        <div>
            <h1>Put Value to KV Store</h1>
            <div>
                <label>
                    Key:
                    <input
                        type="text"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Value:
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={putValue}>Put Value</button>
            <p>{responseMessage}</p>
        </div>
    );
};

export default PutValueComponent;
