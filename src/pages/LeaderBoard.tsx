import React from "react";
import { Trophy, Star, Book, Brain, PenTool, Heart } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Avatars from "../imports/avatars";

interface KnowledgeSeeker {
  rank: number;
  name: string;
  score: number;
  voices: number;
  avatar: string;
}

interface KnowledgeLinker {
  rank: number;
  name: string;
  totalQuizzes: number;
  knowledgeContributions: number;
  avatar: string;
}

const Leaderboard: React.FC = () => {
  const {
    raneesha,
    ravindu,
    gimhan,
    hasini,
    matheesha,
    pamodi,
    uditha,
    prabhath,
    ahamed,
    akash,
    aniththara,
    chanduni,
    charith,
    chathura,
    hasitha,
    hemal,
    heshan,
    heshani,
    jayani,
    nipuna,
  } = Avatars;

  // Mock data for Knowledge Seekers
  const seekers: KnowledgeSeeker[] = [
    {
      rank: 1,
      name: "Nipuna Nuwan...",
      score: 15420,
      voices: 156,
      avatar: nipuna,
    },
    {
      rank: 2,
      name: "Ravindu",
      score: 14250,
      voices: 142,
      avatar: ravindu,
    },
    {
      rank: 3,
      name: "Gimhan Senana...",
      score: 13800,
      voices: 128,
      avatar: gimhan,
    },
    {
      rank: 4,
      name: "Hashini Nawarat...",
      score: 12500,
      voices: 115,
      avatar: hasini,
    },
    {
      rank: 5,
      name: "Matheesha Bha...",
      score: 11900,
      voices: 98,
      avatar: matheesha,
    },
    {
      rank: 6,
      name: "Uditha Sankalpa",
      score: 11200,
      voices: 87,
      avatar: uditha,
    },
    {
      rank: 7,
      name: "Pamodi Rashmila",
      score: 10800,
      voices: 82,
      avatar: pamodi,
    },
    {
      rank: 8,
      name: "Prabhath Madus...",
      score: 10400,
      voices: 76,
      avatar: prabhath,
    },
    {
      rank: 9,
      name: "Ahamed Reeza",
      score: 9800,
      voices: 71,
      avatar: ahamed,
    },
    {
      rank: 10,
      name: "Akash WK",
      score: 9200,
      voices: 65,
      avatar: akash,
    },
  ];

  // Mock data for Knowledge Linkers
  const linkers: KnowledgeLinker[] = [
    {
      rank: 1,
      name: "Anuththara...",
      totalQuizzes: 89,
      knowledgeContributions: 245,
      avatar: aniththara,
    },
    {
      rank: 2,
      name: "Raneesha...",
      totalQuizzes: 76,
      knowledgeContributions: 198,
      avatar: raneesha,
    },
    {
      rank: 3,
      name: "Chanduni Ni...",
      totalQuizzes: 68,
      knowledgeContributions: 176,
      avatar: chanduni,
    },
    {
      rank: 4,
      name: "Charith Ma...",
      totalQuizzes: 52,
      knowledgeContributions: 145,
      avatar: charith,
    },
    {
      rank: 5,
      name: "Chathuwa Di...",
      totalQuizzes: 48,
      knowledgeContributions: 132,
      avatar: chathura,
    },
    {
      rank: 6,
      name: "Hasitha Kush...",
      totalQuizzes: 41,
      knowledgeContributions: 118,
      avatar: hasitha,
    },
    {
      rank: 7,
      name: "Hemal Dilan...",
      totalQuizzes: 38,
      knowledgeContributions: 105,
      avatar: hemal,
    },
    {
      rank: 8,
      name: "Heshan Hasi...",
      totalQuizzes: 32,
      knowledgeContributions: 94,
      avatar: heshan,
    },
    {
      rank: 9,
      name: "Heshani Net...",
      totalQuizzes: 28,
      knowledgeContributions: 82,
      avatar: heshani,
    },
    {
      rank: 10,
      name: "Jayani Upek...",
      totalQuizzes: 25,
      knowledgeContributions: 76,
      avatar: jayani,
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="rank-icon rank-icon--gold" size={24} />;
      case 2:
        return <Trophy className="rank-icon rank-icon--silver" size={24} />;
      case 3:
        return <Trophy className="rank-icon rank-icon--bronze" size={24} />;
      default:
        return <Star className="rank-icon" size={24} />;
    }
  };

  return (
    <div className="leaderboard-page">
      <NavBar />

      <main className="leaderboard">
        <div className="leaderboard__container">
          <h1 className="leaderboard__title">
            🏆 <span>Leaderboard</span> 🏆
          </h1>

          <div className="leaderboard__content">
            {/* Knowledge Seekers Section */}
            <section className="leaderboard__section">
              <div className="section__header">
                <Brain className="section__icon" />
                <h2 className="section__title">Top Knowledge Seekers</h2>
              </div>

              <div className="ranking-list">
                {seekers.map((seeker) => (
                  <div
                    key={seeker.rank}
                    className={`ranking-card ${
                      seeker.rank <= 3 ? "ranking-card--top" : ""
                    }`}
                  >
                    <div className="ranking-card__left">
                      {getRankIcon(seeker.rank)}
                      <img
                        src={seeker.avatar}
                        alt={seeker.name}
                        className="ranking-card__avatar"
                      />
                      <span className="ranking-card__name">{seeker.name}</span>
                    </div>

                    <div className="ranking-card__right">
                      <div className="ranking-card__stat">
                        <Book size={16} />
                        <span>{seeker.score} points</span>
                      </div>
                      <div className="ranking-card__stat">
                        <Heart size={16} />
                        <span>{seeker.voices} voices</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Knowledge Linkers Section */}
            <section className="leaderboard__section">
              <div className="section__header">
                <PenTool className="section__icon" />
                <h2 className="section__title">Top Knowledge Linkers</h2>
              </div>

              <div className="ranking-list">
                {linkers.map((linker) => (
                  <div
                    key={linker.rank}
                    className={`ranking-card ${
                      linker.rank <= 3 ? "ranking-card--top" : ""
                    }`}
                  >
                    <div className="ranking-card__left">
                      {getRankIcon(linker.rank)}
                      <img
                        src={linker.avatar}
                        alt={linker.name}
                        className="ranking-card__avatar"
                      />
                      <span className="ranking-card__name">{linker.name}</span>
                    </div>

                    <div className="ranking-card__right">
                      <div className="ranking-card__stat">
                        <Book size={16} />
                        <span>{linker.totalQuizzes} quizzes</span>
                      </div>
                      <div className="ranking-card__stat">
                        <Brain size={16} />
                        <span>
                          {linker.knowledgeContributions} contributions
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Leaderboard;
