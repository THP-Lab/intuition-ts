FROM ubuntu:22.04

# Install dependencies
RUN apt-get update && \
    apt-get install -y curl build-essential git && \
    rm -rf /var/lib/apt/lists/*

# Install Foundry
RUN curl -L https://foundry.paradigm.xyz | bash
ENV PATH="/root/.foundry/bin:${PATH}"
RUN foundryup

WORKDIR /app

# Copy contracts and config
COPY contracts/ /app/contracts/
COPY lib/ /app/lib/
COPY foundry.toml /app/foundry.toml
COPY remappings.txt /app/remappings.txt

# Build contracts
RUN forge build

# Expose default Anvil port
EXPOSE 8545

# Start Anvil with specified parameters
CMD ["/root/.foundry/bin/anvil", "--host", "0.0.0.0", "--chain-id", "31337"] 