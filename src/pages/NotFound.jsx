import { Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mt-6 w-[50rem] h-[25rem] flex justify-between items-center">
        <CardBody className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 mb-4 text-gray-900"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2"
          >
            404 - Page Not Found :(
          </Typography>
          <Typography
            color="blue-gray"
            className="mb-2"
          >
            Sorry, you can&apos;t access this page.
          </Typography>
          <Typography
            color="blue-gray"
            className="mb-2"
          >
            Please check the URL and try again.
          </Typography>
          <Typography
            color="blue-gray"
            className="mb-2"
          >
            If you give up, you can return to the home page by clicking the button below.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link
            to="/"
            className="inline-block"
          >
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2"
            >
              Back to Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;
