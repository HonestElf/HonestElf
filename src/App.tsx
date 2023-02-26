import AppRouter from './router';
import style from './App.module.scss';
import ThemeProvider from './Theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className={style.AppWrapper}>
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
