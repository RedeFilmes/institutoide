function CourseCard({ title, description, price, image }) {
    try {
        const [showRegistration, setShowRegistration] = React.useState(false);

        return (
            <div data-name="course-card" className="course-card">
                <img src={image} alt={title} className="course-image" />
                <div className="course-content">
                    <h3 className="course-title">{title}</h3>
                    <p className="course-description">{description}</p>
                    <div className="course-price">{price}</div>
                    <button 
                        className="course-button"
                        onClick={() => setShowRegistration(true)}
                    >
                        <i className="fas fa-sign-in-alt mr-2"></i>
                        Inscreva-se Agora
                    </button>
                </div>
                {showRegistration && (
                    <CourseRegistration 
                        course={{ title, description, price }} 
                        onClose={() => setShowRegistration(false)}
                    />
                )}
            </div>
        );
    } catch (error) {
        console.error('CourseCard render error:', error);
        reportError(error);
        return null;
    }
}
