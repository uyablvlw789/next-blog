function DarkTheme() {
  return (
    <style jsx global>
      {`
        /* Dark Theme */
        :root {
          --background-color: black;
          --link-color: rgb(209, 187, 25);
          --text-color: white;
        }
      `}
    </style>
  );
}

export default DarkTheme;
