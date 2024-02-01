export const IterateLinks = ({ links }) => {
  return (
    links &&
    links.map((link) => {
      return (
        <ul>
          <a href="#">
            <li className="py-1">{link}</li>
          </a>
        </ul>
      );
    })
  );
};
