function func1() {
  const a = 10;

  function func2() {
    console.log("func2");

    function func3(arg1) {
      console.log(arg1, a);
    }

    return func3;
  }

  return func2;
}

func1()()("hello");
