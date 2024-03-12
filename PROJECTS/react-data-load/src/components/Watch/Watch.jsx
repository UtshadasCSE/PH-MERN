function Watch({ watch }) {
  const { model, brand } = watch;
  return (
    <div>
      <p>Model:{model}</p>
      <p>Brand:{brand}</p>
    </div>
  );
}

export default Watch;
