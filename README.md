
# Superhero Database Project

## Project Overview

This project is a web page that allows users (villains) to organize and display superhero data. The application fetches superhero data from an external API and displays it in a table format with features like sorting, pagination, and interactive searching. The goal is to make it easier for the villain to track down all superheroes by analyzing their stats.

## Features

- **Data Fetching:** Fetch superhero data from an external API using the Fetch API.
- **Search Functionality:** Interactive search that filters the table based on the superhero’s name.
- **Pagination:** Selectable page sizes for viewing 10, 20, 50, 100, or all results per page.
- **Sorting:** Sortable columns for all table fields, allowing ascending and descending order sorting.
- **Performance Optimization:** Efficient handling of large datasets to ensure fast sorting, filtering, and rendering.
- **Responsive Design:** The application is responsive and adjusts to different screen sizes.

## Tech Stack

- **HTML5:** Structure of the web page.
- **CSS3:** Styling of the web page and table.
- **JavaScript (ES6+):** Data fetching, sorting, searching, pagination, and interactivity.
- **API:** The superhero data is fetched from [Superhero API](https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json).

## Project Structure

```bash
root/
├── index.html      # Main HTML file
├── style.css       # CSS file for styling
└── script.js       # JavaScript file for functionality
```

## Usage

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   ```
   
2. **Open `index.html` in your browser:**
   Simply open the `index.html` file in a web browser to view the project.

3. **Search and Sort:**
   - Use the search bar to filter superheroes by name.
   - Click on any table header to sort the data by that column.

4. **Select Page Size:**
   - Use the dropdown menu to change the number of results per page (default is 20).

## How It Works

1. **Data Fetching:**  
   The superhero data is fetched from a public API via the `fetch()` method in JavaScript. It returns a Promise that resolves to the JSON data containing all the superheroes and their attributes.

2. **Displaying Data:**  
   The superhero data is displayed in a paginated table, with columns for the superhero’s image, name, full name, powerstats, race, gender, height, weight, place of birth, and alignment.

3. **Pagination:**  
   Users can select the number of results they want to see per page using the dropdown. By default, 20 results are shown per page.

4. **Search:**  
   The search bar allows users to filter results interactively as they type. The filtering is based on the superhero's name.

5. **Sorting:**  
   The table columns are sortable. Users can click on a column header to toggle between ascending and descending sorting.

## Future Enhancements (Optional)

- **Field-Specific Search:** Allow users to search by specific fields (e.g., by race, gender).
- **Advanced Search Operators:** Support for complex search conditions (e.g., "greater than", "less than" for numerical fields like weight and height).
- **Detail View:** Clicking on a superhero's name could open a detailed view with all information and a larger image.

### Authors

<div style="display: flex; justify-content: flex-start;">
    <div style="margin: 10px;">
        <table>
            <tr>
                <td align="center" style="word-wrap: break-word; width: 150px; height: 150px;">
                    <a href="https://www.linkedin.com/in/shayo-victor-381370307?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJXYqqApcRCWd7I5wyah2CQ%3D%3D">
                        <img src="https://learn.zone01kisumu.ke/git/avatars/4c262d87dda4f1dbcfac8ef82b1fd096?size=870" width="100" style="border-radius: 50%; padding-top: 10px;" alt="Shayo Victor"/>
                        <br />
                        <sub style="font-size: 14px;"><b>Shayo Victor</b></sub>
                    </a>
                </td>
            </tr>
        </table>
    </div>
    <div style="margin: 10px;">
        <table>
            <tr>
                <td align="center" style="word-wrap: break-word; width: 150px; height: 150px;">
                    <a href="https://www.linkedin.com/in/john-opiyo-b20056141?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE%2BUj%2Bnn%2FRV2R5H%2By4K60wA%3D%3D">
                        <img src="https://learn.zone01kisumu.ke/git/avatars/de14feb37f22dd369ba6ef40b42cd827?size=870" width="100" style="border-radius: 50%; padding-top: 10px;" alt="John Opiyo"/>
                        <br />
                        <sub style="font-size: 14px;"><b>John Opiyo</b></sub>
                    </a>
                </td>
            </tr>
        </table>
    </div>
    <div style="margin: 10px;">
        <table>
            <tr>
                <td align="center" style="word-wrap: break-word; width: 150px; height: 150px;">
                    <a href="https://www.linkedin.com/in/john-odhiambo-6b1863307?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Ai%2BR4gXevSkSuofNOAyh3tQ%3D%3D">
                        <img src="https://learn.zone01kisumu.ke/git/avatars/fd3c2e68f3bacd240733fd8557d3120b?size=870" width="100" style="border-radius: 50%; padding-top: 10px;" alt="John Odhiambo"/>
                        <br />
                        <sub style="font-size: 14px;"><b>John Odhiambo</b></sub>
                    </a>
                </td>
            </tr>
        </table>
    </div>
</div>


## License

This project is open-source and available under the [MIT License](LICENSE).
