{ pkgs, ... }: {
  # Enables the Preview panel
  idx.previews = {
    enable = true;
    previews = [
      {
        command = "npm run dev -- --port $PORT";
        manager = "web";
        id = "web";
        label = "Web";
      }
    ];
  };
}
