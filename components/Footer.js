function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-blue-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div data-name="footer-about">
                            <h3 className="footer-title">Instituto IDE</h3>
                            <p className="mt-4">
                                Transformando vidas através da educação, saúde e inclusão social 
                                em São João de Meriti.
                            </p>
                        </div>
                        <div data-name="footer-links">
                            <h3 className="footer-title">Links Rápidos</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#inicio">Início</a></li>
                                <li><a href="#cursos">Cursos</a></li>
                                <li><a href="#servicos">Serviços</a></li>
                                <li><a href="#projetos">Projetos</a></li>
                                <li><a href="#contato">Contato</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-services">
                            <h3 className="footer-title">Serviços</h3>
                            <ul className="mt-4 space-y-2">
                                <li>Cursos Profissionalizantes</li>
                                <li>Atendimento Odontológico</li>
                                <li>Projetos Sociais</li>
                                <li>Defesa Civil</li>
                                <li>Eventos Comunitários</li>
                            </ul>
                        </div>
                        <div data-name="footer-contact">
                            <h3 className="footer-title">Contato</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    Rua Example, 123 - Centro
                                </li>
                                <li>
                                    <i className="fas fa-phone mr-2"></i>
                                    (21) 9999-9999
                                </li>
                                <li>
                                    <i className="fas fa-envelope mr-2"></i>
                                    contato@institutoide.org
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-blue-800 text-center">
                        <p>&copy; 2024 Instituto IDE. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer render error:', error);
        reportError(error);
        return null;
    }
}
