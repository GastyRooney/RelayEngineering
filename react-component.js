// React Component
function CompanyVision() {
    return (
        <div className="react-component-container">
            <h3>Our Vision</h3>
            <p>To be the leading provider of innovative and sustainable engineering solutions, fostering a greener and safer world for generations to come.</p>
        </div>
    );
}

// Render the React component into the 'react-root' div
const domNode = document.getElementById('react-root');
ReactDOM.createRoot(domNode).render(<CompanyVision />);