import EnrollStudent from '@/components/enroll-student.component';
import GithubLink from '@/components/github-link.component';

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen page">
      <EnrollStudent />
      <GithubLink />
    </div>
  );
}
