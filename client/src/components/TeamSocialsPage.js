import { Link } from 'react-router-dom';
import '../styles/teamsocials.css';

function TeamSocialsPage() {
    return (
        <div className="team-socials-container">
            <h1 className="team-title">Meet the Team</h1>
            <div className="team-members">
                <Link className="team-member-link" to="https://www.linkedin.com/in/elahn-danee/">Elahn Danee</Link>
                <Link className="team-member-link" to="https://www.linkedin.com/in/katcontreras/">Kat Contreras</Link>
                <Link className="team-member-link" to="https://www.linkedin.com/in/sophia-tony-egbuniwe">Sophia Tony-Egbuniwe</Link>
                <Link className="team-member-link" to="https://www.linkedin.com/in/tateana-pettiway-6b0449142/">Tateana Pettiway</Link>
                <Link className="team-member-link" to="https://www.linkedin.com/in/winda-hao">Winda Hao</Link>
                <Link className="team-member-link" to="https://www.linkedin.com/in/tsuki/">Zelzin Marquez</Link>
            </div>
        </div>
    );
}

export default TeamSocialsPage;
