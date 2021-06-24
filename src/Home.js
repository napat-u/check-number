import React, { useState, useEffect } from 'react';

const Home = () => {
	const [number, setNumber] = useState(0)
	const [status, setStatus] = useState(false)
	const [whichFunction, setWhichFunction] = useState(0)

	useEffect(() => {
		switch (whichFunction) {
			case '0':
				return isPrime()
			case '1':
				return isFibonacci(number)
		}
		// isPrime()
		// isFibonacci(number)
	}, [number, whichFunction])

	const handleChange = (e) => {
		if (e.target.value < 0) {
			return setNumber(1)
		}
		return setNumber(Math.round(e.target.value))
	}

	const isPrime = () => {
		if (number % 2 === 0) {
			return setStatus(true)
		}
		return setStatus(false)
	}

	const isFibonacci = (num, count = 1, last = 0) => {
		if (count < num) {
			//loop by calling itself until num = count
			return isFibonacci(num, count + last, count) // isFibo(3) = (3, 1+2, 2)
		}
		if (count === num) {
			return setStatus(true)
		}
		return setStatus(false)
	}

	const handleDropdown = (e) => {
		setWhichFunction(e.target.value)
	}


	return (
		<>
			<div style={{ width: '250px', borderRight: '2px solid black' }}>
				<input type="number" value={number} onChange={handleChange} style={{ width: '100px' }} />
			</div>
			<div style={{ width: '100%', borderRight: '2px solid black' }}>
				<select onChange={handleDropdown}>
					<option value={0}>isPrime</option>
					<option value={1}>isFibonacci</option>
				</select>
			</div>
			<div style={{ width: '300px' }}>
				{status ? 'true' : 'false'}
			</div>
		</>
	)
}

export default Home