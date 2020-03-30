import React, { useState } from "react";
import moment from "moment";

const Feed = () => {
  const [time, setTime] = useState(moment().format("LT"));
  const [expressed, setExpressed] = useState("2oz");

  return (
    <div>
      <form>
        <div>
          <input type="text" value={time} />
        </div>
        <div>
          <label>
            Expressed
            <select
              value={expressed}
              onChange={(e) => setExpressed(e.target.value)}
            >
              <option value="1oz">1oz</option>
              <option value="1.5oz">1.5oz</option>
              <option value="2oz">2oz</option>
              <option value="2.5oz">2.5oz</option>
              <option value="3oz">3oz</option>
            </select>
          </label>
        </div>
        <div>
          <input type="submit" value="Done" />
        </div>
      </form>
    </div>
  );
};

export default Feed;
