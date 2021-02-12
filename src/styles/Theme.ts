type ThemeProps = {
  color: {
    body: string;
    text: string;
    primary: string;
  };
  font: {
    first: string;
    second: string;
  };
};

export const Theme: ThemeProps = {
  color: {
    body: "#fff",
    text: "#333",
    primary: "#7158e2"
  },
  font: {
    first: "Helvetica, Arial, sans-serif",
    second: "'Spectral', Georgia"
  }
};
