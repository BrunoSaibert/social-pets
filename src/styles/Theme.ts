type ThemeProps = {
  color: {
    body: string;
    text: string;
    primary: string;
    primary_dark: string;
    primary_ligth: string;
    gray: string;
    error: string;
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
    primary: "#fb1",
    primary_dark: "#764701",
    primary_ligth: "#fea",
    gray: "#666",
    error: "#f31",
  },
  font: {
    first: "Helvetica, Arial, sans-serif",
    second: "'Spectral', georgia",
  },
};
