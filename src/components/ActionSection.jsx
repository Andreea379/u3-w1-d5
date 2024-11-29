import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "react-bootstrap";
import { Grid, JustifyLeft } from "react-bootstrap-icons";

const ActionSection = () => {
  return (
    <Container fluid>
      <div>
        <h3>TV Shows</h3>
        <Dropdown>
          <DropdownToggle
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Genres
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Romance</DropdownItem>
            <DropdownItem href="#">Fantasy</DropdownItem>
            <DropdownItem href="#">Documentaries</DropdownItem>
            <DropdownItem href="#">Comedy</DropdownItem>
            <DropdownItem href="#">Horror</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div>
        <span>
          <JustifyLeft size={20} color="white" />
        </span>
        <span>
          <Grid size={20} color="white" />
        </span>
      </div>
    </Container>
  );
};
console.log(ActionSection);
export default ActionSection;
