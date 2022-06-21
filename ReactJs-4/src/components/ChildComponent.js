import { useEffect } from 'react'
const ChildComponent = () => {
	useEffect(() => {
    console.log("[ChildComponent] Component Mounted!");
  }, []);

	useEffect(() => {
		return () => {
			console.log("[ChildComponent] Component will unmount now ...");
		}
  }, []);

	return (
		<div>ChildComponent</div>
	)
}

export default ChildComponent