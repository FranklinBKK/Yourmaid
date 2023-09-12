import Nav from "./components/Nav";
import Card from "./components/Card";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <main>
      <Nav>
        <Grid>
          <Card />
        </Grid>
      </Nav>
    </main>
  );
}
