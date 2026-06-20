## Bento Layout Course Dashboard

Github Repo - https://github.com/sankha19g/student-course-dashboard
Live website - https://student-course-dashboard-two.vercel.app/

#### Tech Stack
Next Js, Tailwind CSS, Javascript, Supabase, Framer motion, Lucide icons, vercel

#### Key Features

**Layout and UI**
- Made the Home page a Bento grid layout.
- Made the app responsive, such that there are 1 components/Boxes in mobile and 4 in large screens.
- Used CSS variables , to easy switch between themes and better maintenance.

**Pages**
- First is Home page where all the components are there like Hero, activity area, my courses, recommended courses and a leaderboard.
- 2nd is Courses page where there are list of courses. In that you can use the search feature.
- Activity and settings pages are still in development.
- At last added profile page where there are user details fetched directly from Supabase DB.

**Animations**
- Used Framer motion for spring physics while hovering the elements
- Added fade up animation every time I open the page, they are Staggering in sequentially.
- Added a skeleton loader in home page.

**Database**
- Used Supabase to fetch data of courses, recommended courses, pictures, user details etc.

#### Challenges
- The bento layout and the making it responsive was a challenging task, a lot of times the UI was breaking. So the UI might not be perfect in different screen sizes.
- I feel this needs more polishing ,could have added more features and pages if I had more time.
