function CivilDefense() {
    try {
        const images = [
            {
                src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3",
                alt: "Fachada da Defesa Civil",
                title: "Ponto de Apoio Oficial"
            },
            {
                src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3",
                alt: "Voluntários em ação",
                title: "Equipe de Voluntários"
            },
            {
                src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3",
                alt: "Distribuição de mantimentos",
                title: "Apoio Comunitário"
            },
            {
                src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3",
                alt: "Reunião comunitária",
                title: "Orientação à Comunidade"
            }
        ];

        return (
            <section data-name="civil-defense" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Defesa Civil de São João de Meriti</h2>
                        <div className="civil-defense-badge">
                            <i className="fas fa-shield-alt text-4xl text-blue-900 mb-4"></i>
                            <p className="text-xl font-semibold text-blue-900">
                                Ponto de Apoio Oficial
                            </p>
                        </div>
                        <p className="section-subtitle">
                            O INSTITUTO IDE é um Ponto de Apoio Oficial da Defesa Civil de São João de Meriti. 
                            Nosso espaço está preparado para acolher, orientar e proteger a comunidade em 
                            situações de emergência. Aqui, vidas importam!
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <div key={index} data-name="civil-defense-image" className="civil-defense-image">
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="rounded-lg shadow-md"
                                />
                                <p className="text-center mt-2 font-medium">{image.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('CivilDefense render error:', error);
        reportError(error);
        return null;
    }
}
