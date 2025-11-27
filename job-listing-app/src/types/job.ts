export interface Job {
  title: string;
  description: string;
  company: string;
  image: string; 
  about: {
    categories: string[];
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    required_skills: string[];
  };
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
}
